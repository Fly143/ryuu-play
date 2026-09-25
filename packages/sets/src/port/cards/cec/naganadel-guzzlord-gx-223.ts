import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class NaganadelGuzzlordGX_223 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 280;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Violent Appetite", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard a Pokémon from your hand. If you do, heal 60 damage from this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Jet Pierce", cost: [], damage: "180", text: "" },
      { name: "Chaotic Order-GX", cost: [], damage: "", text: "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.) If this Pokémon has at least 1 extra Psychic Energy and 1 extra Darkness Energy attached to it (in addition to this attack's cost), take 2 Prize cards. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Naganadel & Guzzlord-GX";
  public fullName: string = "Naganadel & Guzzlord-GX CEC 223";
  public text: string = "Naganadel & Guzzlord-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 60);
    }
    return state;
  }
}
