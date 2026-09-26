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

export class Castform_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Temperament", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for any Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Castform on top of your deck. Shuffle your deck afterward. You can't use more than 1 Temperament Poké-Power each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Weather Ball", cost: [], damage: "30+", text: "If you have a Stadium card in play, remove 3 damage counters from Castform. If your opponent has a Stadium card in play, this attack does 30 damage plus 30 more damage." }
  ];
  public set: string = "SF";
  public name: string = "Castform";
  public fullName: string = "Castform SF 48";
  public text: string = "Castform";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
