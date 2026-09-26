import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PersianGX_207 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meowth";
  public hp: number = 200;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cat Walk", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if 1 of your Pokémon-GX or Pokémon-EX was Knocked Out during your opponent's last turn, you may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck. You can't use more than 1 Cat Walk Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Vengeance", cost: [], damage: "10+", text: "This attack does 20 more damage for each Pokémon in your discard pile. You can't add more than 180 damage in this way." },
      { name: "Slash Back-GX", cost: [], damage: "150", text: "Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNM";
  public name: string = "Persian-GX";
  public fullName: string = "Persian-GX UNM 207";
  public text: string = "Persian-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
