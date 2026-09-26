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

export class Ludicolo_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lombre";
  public hp: number = 100;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Swing Dance", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may draw a card. This power can't be used if Ludicolo is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Healing Steps", cost: [], damage: "30", text: "You may discard as many cards as you like from your hand. If you do, remove that many damage counters from Ludicolo." },
      { name: "Circular Steps", cost: [], damage: "10×", text: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's), excluding Ludicolo." }
  ];
  public set: string = "DX";
  public name: string = "Ludicolo";
  public fullName: string = "Ludicolo DX 10";
  public text: string = "Ludicolo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
